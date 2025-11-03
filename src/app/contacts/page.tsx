import { Header } from "@/components/composed/header";
import { ItemGroup, ItemSeparator } from "@/components/ui/item";
import * as React from "react";
import ContactRow from "@/app/contacts/ContactRow";
import { Empty, EmptyDescription, EmptyHeader } from "@/components/ui/empty";

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalInfo: string;
  isVerified: boolean;
}

export default async function Page() {
  const getAllContacts = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`,
    { cache: "no-store" },
  );

  if (!getAllContacts.ok) {
    throw new Error(
      `There was an error getting all contacts. ${JSON.stringify(await getAllContacts.json())}`,
    );
  }

  const contacts: Contact[] = (await getAllContacts.json()).rows;

  const hasContacts = contacts.length > 0;

  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-2 py-12 md:pt-48 md:pb-0">
        <h1 className="font-medium text-xl text-neutral-800 text-center mb-6">
          Manage Contacts{" "}
          {`${contacts.length > 0 ? `(${contacts.length})` : ""}`}
        </h1>
        <div className="rounded-md border p-6 shadow-sm w-full max-w-3xl">
          {hasContacts ? (
            <ItemGroup className="overflow-y-auto h-128">
              {contacts.map((aContact, index) => (
                <React.Fragment
                  key={`${aContact.firstName}+${aContact.lastName}+${aContact.email}+${aContact.phone}`}
                >
                  <ContactRow contact={aContact} />
                  {index !== contacts.length - 1 && <ItemSeparator />}
                </React.Fragment>
              ))}
            </ItemGroup>
          ) : (
            <Empty>
              <EmptyHeader>
                <EmptyDescription>
                  No contacts are on file yet. Once a contact exists, feel free
                  to verify and delete here.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          )}
        </div>
      </div>
    </>
  );
}

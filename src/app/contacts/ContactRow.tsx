"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { useTransition } from "react";
import { Contact } from "@/app/contacts/page";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type Props = { contact: Contact };

export default function ContactRow({ contact }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function markVerified() {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact/verify`, {
      body: JSON.stringify({
        email: contact.email,
        isVerified: true,
      }),
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
    });
    startTransition(() => router.refresh());
  }

  async function removeContact() {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`, {
      body: JSON.stringify({ email: contact.email }),
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    });
    startTransition(() => router.refresh());
  }

  return (
    <Item>
      <ItemMedia>
        <Avatar className="size-10">
          <AvatarImage src="/" />
          <AvatarFallback>{`${contact.firstName.substring(0, 1).toUpperCase()}${contact.lastName.substring(0, 1).toUpperCase()}`}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent className="gap-1">
        <ItemTitle>
          {contact.firstName} {contact.lastName}
        </ItemTitle>
        <ItemDescription>
          {contact.email} ({contact.phone})
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button
          variant="outline"
          size="sm"
          disabled={contact.isVerified || isPending}
          onClick={markVerified}
        >
          Mark Verified
        </Button>
        <Button
          variant="destructive"
          size="sm"
          disabled={isPending}
          onClick={removeContact}
        >
          Delete
        </Button>
      </ItemActions>
    </Item>
  );
}

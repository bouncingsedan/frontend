import { Header } from "@/components/composed/header";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet, } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Page() {
  async function saveContact(formData: FormData) {
    "use server";

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      additionalInfo: formData.get("additionalInfo"),
    };

    const sentRequest = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-cache",
      },
    );

    if (!sentRequest.ok) {
      throw new Error(
        `There was an error saving contact: ${JSON.stringify(payload)}.`,
      );
    }

    redirect("/thank-you");
  }

  return (
    <>
      <Header />

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 md:flex-row md:gap-6 md:py-24">
        <div className="rounded-md border p-6 shadow-sm md:w-80 bg-white">
          <p className="mt-2 text-sm text-neutral-700">
            We've been around since 2013, and our vision is to make it easy for
            people to buy, sell and own property. <br /> <br />
            Here are the different ways you can contact us: <br /> <br />
          </p>

          <p className="mt-2 text-sm text-neutral-700">
            <span className="underline">Contact Details</span> <br />
            Phone: 13 24 34 <br />
            Email: support@openagent.com.au <br /> <br />
            <span className="underline">Postal Address:</span> <br />
            PO Box 419, Alexandria NSW 1435 <br /> <br />
            <span className="underline">
              Contact centre hours of operation
            </span>{" "}
            <br />
            Monday - Friday 8:30 - 5:00 <br />
          </p>
        </div>

        <div className="bg-white p-4 rounded-md border p-6 shadow-sm">
          <form action={saveContact}>
            <FieldSet className="flex-1">
              <FieldLegend>Send a message</FieldLegend>
              <FieldDescription>
                Fill in your details and we'll be in touch right away. Or if you
                prefer, call us on <strong>13 24 34</strong>
              </FieldDescription>
              <FieldGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    autoComplete="off"
                    minLength={3}
                    required
                    placeholder="John"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                  <Input
                    id="lastName"
                    name="lastName"
                    autoComplete="off"
                    minLength={3}
                    required
                    placeholder="Doe"
                  />
                </Field>
                <Field className="md:col-span-2">
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    required
                    placeholder="john@doe.com"
                  />
                </Field>
                <Field className="md:col-span-2">
                  <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    autoComplete="off"
                    inputMode="tel"
                    pattern="^\+?[0-9]{7,15}$"
                    required
                    placeholder="+61400000000"
                  />
                </Field>
                <Field className="md:col-span-2">
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    autoComplete="off"
                    required
                    minLength={10}
                    maxLength={5000}
                    placeholder="What do you want to speak to us about"
                  />
                </Field>
                <Field orientation="horizontal" className="md:col-span-2">
                  <Button type="submit">Submit</Button>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </div>
    </>
  );
}

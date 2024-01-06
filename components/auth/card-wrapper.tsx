import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";

export function CardWrapper(props: {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}) {
  return (
    <Card className="w-96 shadow-md">
      <CardHeader>
        <Header label={props.headerLabel} />
      </CardHeader>
      <CardContent>{props.children}</CardContent>
      {props.showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={props.backButtonLabel} href={props.backButtonHref} />
      </CardFooter>
    </Card>
  );
}

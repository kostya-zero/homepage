import { JSX } from "react";

export interface Contact {
    id: string;
    name: string;
    contact: string;
    icon: JSX.Element;
    url: string;
    wip?: boolean;
}

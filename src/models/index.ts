import { ReactNode } from "react";

export interface IChildren {
  children: React.ReactNode;
}

export interface ITitle {
  title: string
}

export interface IButton {
  content: string
}

export interface IText {
  text: string
}

export interface ISearch {
  placeholder: string,
  className: any
}

export interface IAdminComponent {
  title: string,
  children: ReactNode
}
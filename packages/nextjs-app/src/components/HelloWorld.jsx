import { defineCustomElement } from "stencil-library/dist/components/hello-world";
import StencilComponent from "./StencilComponent";

export default function HelloWorld({ first, last }) {
  return (
    <StencilComponent defineCustomElement={defineCustomElement} componentProps={{ first, last }} tagName="hello-world" />
  )
}

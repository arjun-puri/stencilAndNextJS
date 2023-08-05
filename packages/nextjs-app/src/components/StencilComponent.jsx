import { renderToString } from "stencil-library/hydrate";

export default async function StencilComponent(props) {
  // props.defineCustomElement is a function that defines the custom webcomponent
  props.defineCustomElement()
  const compHTML = await getHydratedComponent(props)

  return (
    <div dangerouslySetInnerHTML={{ __html: compHTML }} />
  )
}

async function getHydratedComponent(props) {
  const dataTemplate = Object.keys(props.componentProps).reduce((acc, key) => {
    return `${acc} ${key}="${props.componentProps[key]}"`
  }, '')
  const componentTemplate = `<${props.tagName} ${dataTemplate} />`
  const { html } = await renderToString(componentTemplate);
  return html;
}

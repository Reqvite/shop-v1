import { ColorPicker, SizePicker } from "../ui";

export function productRender(section: any, index: number) {
  switch (section.__component) {
    case "product.color-picker":
      return (
        <ColorPicker
          options={section.color}
          onChange={console.log}
          label={section.color[0].label}
        />
      );
    case "product.size":
      return (
        <SizePicker options={section.size} label={section.size[0].label} />
      );
    default:
      return null;
  }
}

// src/svg.d.ts
declare module "*.svg" {
  const content: string; // This will treat the SVG as a string (the path to the file)
  export default content;
}

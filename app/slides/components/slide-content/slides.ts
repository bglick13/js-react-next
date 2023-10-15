import { slide as slide1 } from "./slide_0_hierarchy";
import { ReactExample } from "./react-example";
export interface Slide {
  slideNumber: number;
  slideTitle: string;
  slideComponent: React.FunctionComponent;
}

export const slides: Slide[] = [slide1];
export const ReactExamples: Record<string, React.FunctionComponent> = {
  "React Example": ReactExample,
};

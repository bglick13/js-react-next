import { slide as slide1 } from "./slide_0_hierarchy";
import { ReactExample } from "./react-example";
import { NextExample } from "./next-example";
export interface Slide {
  slideNumber: number;
  slideTitle: string;
  slideComponent: React.FunctionComponent;
}

export const slides: Slide[] = [slide1];
export const ReactExamples: Record<string, React.FunctionComponent<any>> = {
  "React Example": ReactExample,
  "Next Example": NextExample,
};

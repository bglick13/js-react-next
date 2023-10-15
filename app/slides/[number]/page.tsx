import { slides, ReactExamples } from "../components/slide-content/slides";
import { SlideFooter } from "../components/slide-footer";
import { allSnippets } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

interface WithDemoProps {
  Body: React.FC<any>;
  Example: React.FunctionComponent<{
    searchParams?: { [key: string]: string | string[] | undefined };
  }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

const WithDemoLayout = ({ Body, Example, searchParams }: WithDemoProps) => {
  return (
    <div className={`flex flex-col sm:flex-row w-full h-full gap-4`}>
      <div className="w-full md:w-2/3">
        <Body />
      </div>
      <div className="flex w-full h-full md:w-1/3">
        <Example searchParams={searchParams} />
      </div>
    </div>
  );
};

const WithoutDemoLayout = ({ Body }: { Body: React.FunctionComponent }) => {
  return <Body />;
};

export default function page({
  params: { number },
  searchParams,
}: {
  params: { number: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const parsedNumber = parseInt(number);
  const snippet = allSnippets.find((s) => s.slideNumber === parsedNumber);
  const Component = slides[parsedNumber - 1]?.slideComponent;
  const Body = !!snippet ? getMDXComponent(snippet.body.code) : null;
  const Example = snippet?.componentName
    ? ReactExamples[snippet.componentName]
    : null;
  if (!Component && !Body) {
    return null;
  }
  return (
    <div className={`flex flex-col p-4 sm:p-12 md:p-24 items-start gap-4`}>
      <h1 className="tracking-tight text-4xl font-extrabold bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 inline-block text-transparent bg-clip-text">
        {snippet?.title}
      </h1>
      {snippet?.componentName && !!Body && !!Example ? (
        <WithDemoLayout
          Body={Body}
          Example={Example}
          searchParams={searchParams}
        />
      ) : !!Body ? (
        <WithoutDemoLayout Body={Body} />
      ) : (
        <Component />
      )}
      <SlideFooter
        slideNumber={parsedNumber}
        totalSlides={allSnippets.length + 1}
      />
    </div>
  );
}

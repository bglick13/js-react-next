// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: "string", required: true },
    slideNumber: { type: "number", required: true },
    componentName: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "snippets",
  documentTypes: [Snippet],
  mdx: {
    rehypePlugins: [rehypePrettyCode],
  },
});

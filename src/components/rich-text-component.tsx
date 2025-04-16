import Link from "next/link";
import SyntaxHighlighterField from "./syntax-highlighter-field";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
const TableRow = ({ row }: { row: any }) => {
  return (
    <tr>
      {row.cells.map((cell: any, idx: number) => (
        <td key={idx}>{cell}</td>
      ))}
    </tr>
  );
};
const RichTextComponent = {
  types: {
    image: ({ value }: any) => (
      <div className="w-full">
        <Image
          src={urlFor(value)?.url()}
          alt="keyboard"
          width={1280}
          height={606}
          className="w-full object-contain aspect-[1280/606] rounded-[12px]"
        />
      </div>
    ),
    callToAction: ({ value, isInline }: any) =>
      isInline ? <a></a> : <div></div>,
    myCodeField: ({ value }: any) => {
      console.log("code =>", value);
      return <SyntaxHighlighterField code={value.code} />;
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mt-4 pl-[30px]">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-4 pl-[30px]">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="ml-8 mt-2 list-disc leading-[30.6px]   text-[rgba(0,0,0,.87)] font-poppins">
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="mt-2 leading-[30.6px]   text-[rgba(0,0,0,.87)] font-poppins">
        {children}
      </li>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1>{children}</h1>,
    h2: ({ children }: any) => (
      <h2 className="block py-[8px] text-[22px] leading-normal font-poppins font-semibold">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className=" mb-2 text-[19px] text-[#333333] font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="my-[15px] pt-[5px] text-[16.5px] text-[#333333] font-semibold">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="my-[15px] pt-[5px] text-[16px] text-[#333333] font-semibold">
        {children}
      </h5>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="rounded-[8px] p-[20px] bg-[rgba(248,211,226,.09)] border-[1px] border-[rgba(51,181,51,1)]">
        <q className="text-[18px] text-[rgba(0,0,0,.87)] font-poppins leading-[30.6px]">
          {children}
        </q>
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="odd:border-red-500 block leading-[1.425rem] text-[16px] my-[18px] text-[rgba(0,0,0,.87)] font-poppins">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline font-bold decoration-[#D84040]  hover:text-[#A31D1D] "
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-poppins-bold text-[18px]">{children}</strong>
    ),
  },
};

export default RichTextComponent;

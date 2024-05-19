// @ts-ignore TS6133
import { expect, test } from "@jest/globals";

import * as z from "../index";

type SchemaType = {
  a?: string;
};

const Schema = z.object({
  a: z.string().optional()
}).strict();

test("Default behaviour permits absence of value", () => {
  const data: SchemaType = {};
  Schema.parse(data);
});

test("Default behaviour permits explicit undefined", () => {
  const data: SchemaType = { a: undefined };
  Schema.parse(data);
});

test("Exact Options permits absence of value", () => {
  const data: SchemaType = {};
  Schema.exactOptions().parse(data);
});

test("Exact Options rejects explicit undefined", () => {
  const data: SchemaType = { a: undefined };
  expect(() => Schema.exactOptions().parse(data)).toThrow();
});

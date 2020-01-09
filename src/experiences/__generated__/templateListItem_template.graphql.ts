/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type templateListItem_template = {
    readonly name: string;
    readonly " $refType": "templateListItem_template";
};
export type templateListItem_template$data = templateListItem_template;
export type templateListItem_template$key = {
    readonly " $data"?: templateListItem_template$data;
    readonly " $fragmentRefs": FragmentRefs<"templateListItem_template">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "templateListItem_template",
  "type": "Template",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '3f97273d7de3893ec5eee9ba1e43edcb';
export default node;

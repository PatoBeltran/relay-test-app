import * as React from 'react';
import { useFragment } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import { templateListItem_template$key } from './__generated__/templateListItem_template.graphql';

import './App.css';

const templateFragment = graphql`
  fragment AppsDetail_list on App {
      id
  }
`;

export function TemplateListItem({ template }) {
  const { name } = useFragment<templateListItem_template$key>(templateFragment, template);

  return (
    <div>
        {name}
    </div>
  );
}



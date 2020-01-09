import * as React from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import { AppQuery } from './__generated__/AppQuery.graphql';
// import { TemplateListItem } from './templateListItem';

import './App.css';

const helloQuery = graphql`
  query AppQuery {
    viewer {
      name
      apps {
        ...AppsList_detail
      }
    }
  }
`;

export function App() {
  const viewer = useLazyLoadQuery<AppQuery>(helloQuery, {});
  console.log(viewer);

  return (
    <div className="App">
      <header className="App-header">
        {/* <div>
          {templates?.map(t => <TemplateListItem template={t} />)}
        </div>
        <div>
          {devices?.map(d => d.name)}
        </div> */}
      </header>
    </div>
  );
}

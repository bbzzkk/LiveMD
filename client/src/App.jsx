import React from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';

const App = () => {
  return (
    <div>
      CRA ESLint Prettier 설정 완료.
      <Editor previewStyle="vertical" usageStatistics={false} />
    </div>
  );
};

export default App;

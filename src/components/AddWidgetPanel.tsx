import { useWidgetContext } from '../lib/WidgetProviderContext';
import { widgetTypes } from '../widgets';

const AddWidgetPanel = () => {
  const { addWidget, toggleEditMode } = useWidgetContext();
  return (
    <div className="mb-4">
      {Object.keys(widgetTypes).map(type => (
        <button
          key={type}
          onClick={() => addWidget(type)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {type}
        </button>
      ))}
      <button onClick={() => toggleEditMode()} className="bg-yellow-500 text-white px-4 py-2 rounded">Toggle Edit Mode</button>
    </div>
  )
}

export default AddWidgetPanel
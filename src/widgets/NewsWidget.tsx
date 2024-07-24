const NewsWidget: React.FC = () => (
  <div className="bg-red-200 p-4 w-full h-full">
    <h2 className="text-xl font-bold">News</h2>
    <p>Latest headlines...</p>
    <button onClick={() => alert('clicked')}>Click me</button>
  </div>
);

export default NewsWidget;
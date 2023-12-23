// const DisplaySection = () => {
//   return (
//     <div>
//       <h1 className="text-5xl font-semibold text-center mb-8">Our Users</h1>
//       <div className="flex">
//         <div className="flex-1">
//           <h2 className="text-xl font-semibold">Developer</h2>
//         </div>
//         <div className="flex-1">
//           <h2 className="text-xl font-semibold">Bankers</h2>
//         </div>
//         <div className="flex-1">
//           <h2 className="text-xl font-semibold">Corporate Professionals</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisplaySection;

const DisplaySection = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center mb-8">Our Users</h1>
      <div className="flex">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Developers</h2>
          <p className="text-gray-600">
            Empowering developers to manage tasks efficiently and collaborate
            seamlessly on projects using our platform's robust features.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Bankers</h2>
          <p className="text-gray-600">
            Streamlining task management for bankers, ensuring organized
            workflows and enhanced productivity in the finance industry.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Corporate Professionals</h2>
          <p className="text-gray-600">
            Supporting corporate professionals in effective task planning and
            execution, facilitating smoother project management within
            organizations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplaySection;

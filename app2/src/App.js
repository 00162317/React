function App() {

  const name = 'Roberto'; 
  const x = true;

  return (
    <div className="App">
      <h1>Hello from React, I'm {name}</h1>
      
      <h2>Haciendo una suma de 1 + 4 = {1+4}</h2>
      <div>
        
        <h3>Haciendo un if: {x ? 'Si es true' : 'Es false'}</h3>

      </div>
    </div>
  );
}
export default App;

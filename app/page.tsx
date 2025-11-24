

export default function page() {
  const frase = <p>JSX faz magia</p>
  const ano = 2025

  return (
    <div>
      <h1>Olá</h1>

      <p>
        O meu primeiro componente React
      </p>
      {frase}
      <p>{ano}</p>

    </div>
  )
}

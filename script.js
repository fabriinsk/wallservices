document.body.innerHTML = `
  <header>
    <h1>WallServices</h1>
    <nav>
      <a href="#sobre">Sobre</a>
      <a href="#servicos">Serviços</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>

  <section id="sobre">
    <h2>Sobre</h2>
    <p>Ofereço soluções em programação: sites, automações, APIs e mais. Vamos transformar sua ideia em código!</p>
  </section>

  <section id="servicos">
    <h2>Serviços</h2>
    <ul>
      <li>📱 Desenvolvimento de sites responsivos</li>
      <li>⚙️ Criação de APIs e integrações</li>
      <li>🤖 Bots e automações personalizadas</li>
    </ul>
  </section>

  <section id="contato">
    <h2>Contato</h2>
    <form id="formContato">
      <input type="text" name="nome" placeholder="Seu nome" required />
      <input type="email" name="email" placeholder="Seu e-mail" required />
      <textarea name="mensagem" placeholder="Sua mensagem" required></textarea>
      <button type="submit">Enviar</button>
    </form>
    <p id="statusMsg"></p>
  </section>

  <footer>
    <p>&copy; 2025 WallServices • <a href="https://github.com/seuusuario" target="_blank">GitHub</a></p>
  </footer>
`;

document.getElementById('formContato').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    mensagem: formData.get('mensagem'),
  };

  const res = await fetch('/api/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const msg = document.getElementById('statusMsg');
  if (res.ok) {
    msg.textContent = 'Mensagem enviada com sucesso!';
    this.reset();
  } else {
    msg.textContent = 'Erro ao enviar. Tente novamente.';
  }
});
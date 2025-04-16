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
    <form id="contactForm">
      <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
      <input type="email" id="email" name="email" placeholder="Seu e-mail" required />
      <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" required></textarea>
      <button type="submit">Enviar</button>
    </form>
    <p id="statusMsg"></p>
  </section>

  <footer>
    <p>&copy; 2025 WallServices • <a href="https://github.com/seuusuario" target="_blank">GitHub</a></p>
  </footer>
`;

const script = document.createElement('script');
script.src = './script.js';
document.body.appendChild(script);

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar lógica para enviar os dados para um servidor
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
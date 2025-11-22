<script>
const qox = document.getElementById('qox');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const notif = document.getElementById('notif');
const loader = document.getElementById('loading');

// Animação Qox
inputs.forEach(i=>{i.addEventListener('focus',()=>{if(qox){qox.style.transform='translateY(-10px) scale(1.03)';qox.style.opacity='1';}});i.addEventListener('blur',()=>{if(qox)qox.style.transform='translateY(0) scale(1)';});});

// Notificação
function showError(msg='Erro: usuário ou senha incorretos.',duration=3000){if(!notif)return;notif.textContent=msg;notif.style.right='20px';notif.style.opacity='1';setTimeout(()=>{notif.style.right='-360px';notif.style.opacity='0';},duration);}

// Form submit exemplo
if(form){form.addEventListener('submit',function(e){e.preventDefault();showError();});}

// Loader e Qox
window.addEventListener('load',()=>{if(loader){loader.style.opacity='0';setTimeout(()=>{loader.style.display='none';},400);}if(qox){setTimeout(()=>{qox.style.opacity='1';qox.style.transform='translateY(0)';},300);}});

// ---------------- Lynsk Hints ----------------
(function setupLynskHints(){
  let focusBlocked=false;
  const falas={
    usuario:'Digite seu usuário.',
    senha:'Digite sua senha corretamente.'
  };
  const campos=document.querySelectorAll("input:not([type='hidden']), select, textarea");
  campos.forEach(campo=>{
    campo.addEventListener('focus',()=>{
      if(focusBlocked){focusBlocked=false;return;}
      const id=campo.id;
      if(id&&falas[id]){
        const balao=document.getElementById('falaBalao');
        const lyn=document.getElementById('personagemLynsk');
        if(balao&&lyn){
          balao.innerHTML=falas[id];
          lyn.style.display='flex';
          lyn.classList.add('animar-aparecer');
          clearTimeout(window._lynTimeout);
          window._lynTimeout=setTimeout(()=>lyn.style.display='none',3500);
        }
      }
    });
  });
})();
</script>

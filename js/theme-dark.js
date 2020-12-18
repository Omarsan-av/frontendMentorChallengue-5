const boton = document.querySelector('#lightDark');
const configUser = window.matchMedia('(prefers-color-scheme: dark)');
const localConfig = localStorage.getItem('tema');
let circle = boton.querySelector('.circle');

// boton.addEventListener('click', ()=>
// {
//    circle.classList.toggle('');
// })

if (localConfig === 'dark') 
{
	document.body.classList.toggle('dark-theme');
   // circle.classList.toogle('toogle-circle');
} 

else if (localConfig === 'light') 
{
	document.body.classList.toggle('light-theme');
   // circle.classList.toogle('toogle-circle');
}

boton.addEventListener('click', () => 
{
	let colorTema;

	if (configUser.matches) 
	{
		// Entramos con modo oscuro
		document.body.classList.toggle('light-theme');
		colorTema = document.body.classList.contains('light-theme') ? 'light' : 'dark';
	} 
	
	else 
	{
		document.body.classList.toggle('dark-theme');
		colorTema = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
	}

	localStorage.setItem('tema', colorTema);
})
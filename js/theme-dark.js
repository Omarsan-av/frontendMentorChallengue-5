// let lightDark = document.getElementById('lightDark');
// let dashboard = document.getElementById('dashboard');
// let title = dashboard.querySelector('h1');
// let subtitle = dashboard.querySelector('h2');
// let theme = dashboard.querySelector('.theme');
// let darkMode = theme.querySelector('p');
// let item = document.getElementsByClassName('item');

// lightDark.addEventListener('click', ()=> 
// {
//    document.body.style.backgroundColor = '#1e202a';
//    title.style.color = 'white';
//    subtitle.style.color = '#8b97c6';
//    theme.style.borderTop = '1.5rem solid #3b3d48';
//    lightDark.querySelector('.circle').style.backgroundColor = '#1e202a';
//    darkMode.style.color = '#8b97c6';

//    for(let i = 0; i < item.length; ++i) 
//    {
//       item[i].style.backgroundColor = '#252a41';
//       item[i].querySelector('p').style.color = '#8b97c6';
//       item[i].querySelector('.followers p').style.color = 'white';
//       item[i].querySelector('.followers p').nextElementSibling.style.color = '#8b97c6';
//       item[0].querySelector('.followers').lastElementChild.style.color = 'white';
//       item[3].querySelector('.followers').lastElementChild.style.color = 'hsl(356, 69%, 56%)';
//    }
// });

const boton = document.querySelector('#lightDark');
const configUser = window.matchMedia('(prefers-color-scheme: dark)');
const localConfig = localStorage.getItem('tema');

if (localConfig === 'dark') 
{
	document.body.classList.toggle('dark-theme');
} 

else if (localConfig === 'light') 
{
	document.body.classList.toggle('light-theme')
}

boton.addEventListener('click', () => 
{
	let colorTema;

	if (configUser.matches) 
	{
		// Entramos con modo oscuro
		document.body.classList.toggle('light-theme')
		colorTema = document.body.classList.contains('light-theme') ? 'light' : 'dark'
	} 
	
	else 
	{
		document.body.classList.toggle('dark-theme')
		colorTema = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
	}

	localStorage.setItem('tema', colorTema)
})
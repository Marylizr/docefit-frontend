import styles from './header.module.css'
// import { Route, Routes } from 'react-router-dom';
// import Landing from '../../pages/landing/landing';
// import About from '../../pages/about/About';
// import Shop from '../../pages/shop/Shop';
// import Contact from '../../pages/Contact/Contact';
// import Login from '../../pages/Login/login';



const Header = ({onSearch}) => {

     return(
          <div>
				<div className={styles.header_bg}>
							
						<header id={styles.topnav}>
								<div className={styles.logo}><img src="http://marylizr.com/doceefit/imagenes/logo2-01.png" alt="doce e fit"/></div>
									<nav>	
										
										{/* <Routes>
          								<Route path="/" element={<Landing/>} />
											<Route path="/" element={<About/>} />
											<Route path="/" element={<Shop/>} />
											<Route path="/" element={<Contact/>} />
											<Route path="/:id" element={<Login/>} />
										</Routes> */}
									</nav>
						</header>
						
						<div className={styles.seach}> <input onChange={event => 
								{const value = event.target.value;
								onSearch(value) 
								}} type="text" placeholder="pesquiçar" />
						</div>    
				</div>
          </div>
     )
};

<input  placeholder="Search" />

export default Header;
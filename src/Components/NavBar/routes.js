 
import Icons from './../../constants/Icons';

const routes = [
    {
        path: "/",
        nameEn: "Home",
        nameAr: "  الرئيسية",
        icon: <Icons.Home className="logoSvg" style={{ width: 20 }} />,
    }, 
    {
        path: "/media",
        nameEn: "Media  ",
        nameAr: "وسائط", 
        icon: <Icons.MediaImg className="logoSvg" style={{ width: 20 }} />,
    },
    {
        path: "/product",
        nameEn: "Our product",
        nameAr: "منتجاتنا", 
        icon: <Icons.ProductIcons className="logoSvg" style={{ width: 20 }} />,
    },
    {
        path: "/about-us",
        nameEn: "about Us", 
        nameAr: "من نحــن ", 
        icon: <Icons.AboutUs className="logoSvg" style={{ width: 20 }} />,

    }, 

    {
        path: "/contact-us",
        nameEn: "Contact Us ",
        nameAr: "اتصل بنا", 
        icon: <Icons.CallOutlite className="logoSvg" style={{ width: 20 }} />,
    },
 
 

];

export default routes
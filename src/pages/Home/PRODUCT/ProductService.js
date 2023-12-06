import Icons from "../../../constants/Icons";

export const ProductService = {
    getProductsData() {
        return [
            { 
                nameEn: 'Choosing distinctive locations for our projects For easy access and proximity to all services ', 
                nameAr: 'اختيار مواقع مميزة لمشاريعنا لسهولة الوصول والقرب من جميع الخدمات', 
                icon:  <Icons.Product1 />
            },
            { 
                nameEn: 'Implementing architectural designs for facades  With an exceptional style that gives the building luxury and sophistication', 
                nameAr: 'تنفيذ التصميمات المعمارية للواجهات بأسلوب استثنائي يمنح المبنى الفخامة والرقي', 
                icon:  <Icons.Product2 />
            },
            { 
                nameEn: 'Commitment to principles and standards Engineering and construction according to standard specifications', 
                nameAr: 'الالتزام بالمبادئ والمعايير الهندسية والبناء حسب المواصفات القياسية', 
                icon:  <Icons.Product3 />
            },
            { 
                nameEn: 'Adherence to requirements standards Building in New Cairo without any violations', 
                nameAr: 'الالتزام بالمبادئ والمعايير الهندسية والبناء حسب المواصفات القياسية', 
                icon:  <Icons.Product4 />
            },
            { 
                nameEn: 'Using the finest raw materials and building materials Used in interior and exterior finishes', 
                nameAr: 'الالتزام بمعايير اشتراطات البناء بالقاهرة الجديدة دون أي مخالفات', 
                icon:  <Icons.Product5 />
            },
            { 
                nameEn: 'Make sure to take advantage of everything The internal spaces of the units with the lowest loading percentage', 
                nameAr: 'الالتزام بمعايير اشتراطات البناء بالقاهرة الجديدة دون أي مخالفات', 
                icon:  <Icons.Product6 />
            },
            { 
                nameEn: 'Implementing an integrated system of specifications Delivery to add the greatest amount of luxury and comfort', 
                nameAr: 'تنفيذ نظام متكامل من مواصفات التسليم لإضافة أكبر قدر من الرفاهية والراحة', 
                icon:  <Icons.Product7 />
            },
            { 
                nameEn: 'Implementing projects according to timetables Ensures adherence to agreed upon delivery dates', 
                nameAr: 'تنفيذ المشاريع وفقا للجداول الزمنية ويضمن الالتزام بمواعيد التسليم المتفق عليها', 
                icon:  <Icons.Product8 />
            },
       
    
 
        ];
    }, 

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }, 
};


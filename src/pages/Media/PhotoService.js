import img from "../../constants/Img";

export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: img.project1,
                thumbnailImageSrc: img.project1,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: img.project2,
                thumbnailImageSrc: img.project2,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: img.project3,
                thumbnailImageSrc: img.project3,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: img.project4,
                thumbnailImageSrc: img.project4,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: img.project1,
                thumbnailImageSrc: img.project1,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: img.project2,
                thumbnailImageSrc: img.project2,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: img.project3,
                thumbnailImageSrc: img.project3,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: img.project4,
                thumbnailImageSrc: img.project4,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: img.project1,
                thumbnailImageSrc: img.project1,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: img.project2,
                thumbnailImageSrc: img.project2,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: img.project3,
                thumbnailImageSrc: img.project3,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: img.project4,
                thumbnailImageSrc: img.project4,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
     
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};


import { FC } from 'react';
import { WinterCollectionDataType } from '../../types/types';
import { CollectionProducts } from './CollectionProducts';
import img1 from '../../assets/images/spring/diz-1-300x300.jpg';
import img2 from '../../assets/images/spring/diz-2-300x300.jpg';
import img3 from '../../assets/images/spring/diz-3-300x300.jpg';
import img4 from '../../assets/images/spring/diz-4-300x300.jpg';
import img5 from '../../assets/images/spring/diz-5-300x300.jpg';
import img6 from '../../assets/images/spring/diz-6-1-300x300.jpg';
// import img6 from '../../assets/images/spring/diz-6-2-300x300.jpg';
import img7 from '../../assets/images/spring/diz-7-300x300.jpg';
import img8 from '../../assets/images/spring/diz-8-300x300.jpg';
import img9 from '../../assets/images/spring/diz-9-300x300.jpg';
import img10 from '../../assets/images/spring/diz-10-300x300.jpg';
import img11 from '../../assets/images/spring/diz-11-300x300.jpg';
import img12 from '../../assets/images/spring/diz-12-300x300.jpg';
import img13 from '../../assets/images/spring/diz-13-300x300.jpg';
import img14 from '../../assets/images/spring/diz-14-300x300.jpg';
import img15 from '../../assets/images/spring/diz-15-300x300.jpg';
import img16 from '../../assets/images/spring/diz-16-300x300.jpg';
import img17 from '../../assets/images/spring/diz-17-300x300.jpg';
import img18 from '../../assets/images/spring/diz-18-300x300.jpg';
import img19 from '../../assets/images/spring/diz-19-300x300.jpg';
import img20 from '../../assets/images/spring/diz-20-300x300.jpg';
import img21 from '../../assets/images/spring/diz-21-300x300.jpg';
import img22 from '../../assets/images/spring/diz-22-300x300.jpg';
import img23 from '../../assets/images/spring/diz-23-300x300.jpg';
import img24 from '../../assets/images/spring/diz-24-300x300.jpg';
import img25 from '../../assets/images/spring/diz-25-300x300.jpg';
import img26 from '../../assets/images/spring/diz-26-2-300x300.jpg';
import img27 from '../../assets/images/spring/diz-27-300x300.jpg';
import img28 from '../../assets/images/spring/diz-28-300x300.jpg';
import img29 from '../../assets/images/spring/diz-29-300x300.jpg';
import img30 from '../../assets/images/spring/diz-30-2-300x300.jpg';
import img31 from '../../assets/images/spring/diz-31-300x300.jpg';
import img32 from '../../assets/images/spring/diz-32-300x300.jpg';
import img33 from '../../assets/images/spring/diz-33-300x300.jpg';
import img34 from '../../assets/images/spring/diz-34-300x300.jpg';
import img35 from '../../assets/images/spring/diz-35-300x300.jpg';
import img36 from '../../assets/images/spring/diz-36-300x300.jpg';
import img37 from '../../assets/images/spring/diz-37-300x300.jpg';
import img38 from '../../assets/images/spring/diz-38-300x300.jpg';
import img39 from '../../assets/images/spring/diz-39-300x300.jpg';
import img40 from '../../assets/images/spring/diz-40-300x300.jpg';
import img41 from '../../assets/images/spring/diz-41-300x300.jpg';
import img42 from '../../assets/images/spring/diz-42-300x300.jpg';
import img43 from '../../assets/images/spring/diz-43-300x300.jpg';
import img44 from '../../assets/images/spring/diz-44-300x300.jpg';
import img45 from '../../assets/images/spring/diz-45-300x300.jpg';
import img46 from '../../assets/images/spring/diz-46-300x300.jpg';
import img47 from '../../assets/images/spring/diz-47-300x300.jpg';
import img48 from '../../assets/images/spring/diz-48-300x300.jpg';
import img49 from '../../assets/images/spring/diz-49-300x300.jpg';
import img50 from '../../assets/images/spring/diz-50-300x300.jpg';
import img51 from '../../assets/images/spring/diz-51-300x300.jpg';
import img52 from '../../assets/images/spring/diz-52-300x300.jpg';
import img53 from '../../assets/images/spring/diz-53-300x300.jpg';
import img54 from '../../assets/images/spring/diz-54-300x300.jpg';
import img55 from '../../assets/images/spring/diz-55-300x300.jpg';
import img56 from '../../assets/images/spring/diz-56-300x300.jpg';
import img57 from '../../assets/images/spring/diz-57-300x300.jpg';
import img58 from '../../assets/images/spring/diz-58-300x300.jpg';
import img59 from '../../assets/images/spring/diz-59-300x300.jpg';
import img60 from '../../assets/images/spring/diz-60-300x300.jpg';
import img61 from '../../assets/images/spring/diz-61-300x300.jpg';
import img62 from '../../assets/images/spring/diz-62-300x300.jpg';
import img63 from '../../assets/images/spring/diz-63-300x300.jpg';
import img64 from '../../assets/images/spring/diz-64-300x300.jpg';
import img65 from '../../assets/images/spring/diz-65-300x300.jpg';
import img66 from '../../assets/images/spring/diz-66-300x300.jpg';
import img67 from '../../assets/images/spring/diz-67-300x300.jpg';
import img68 from '../../assets/images/spring/diz-68-300x300.jpg';
import img69 from '../../assets/images/spring/diz-69-1-300x300.jpg';
import img70 from '../../assets/images/spring/diz-70-300x300.jpg';
import img71 from '../../assets/images/spring/diz-71-300x300.jpg';
import img72 from '../../assets/images/spring/diz-72-300x300.jpg';
import img73 from '../../assets/images/spring/diz-73-300x300.jpg';

export const CollectionData: FC = () => {
  const springData: WinterCollectionDataType[] = [
    { id: 1, title: 'Spring Collection 1', image: img1 },
    { id: 2, title: 'Spring Collection 2', image: img2 },
    { id: 3, title: 'Spring Collection 3', image: img3 },
    { id: 4, title: 'Spring Collection 4', image: img4 },
    { id: 5, title: 'Spring Collection 5', image: img5 },
    { id: 6, title: 'Spring Collection 6', image: img6 },
    { id: 7, title: 'Spring Collection 7', image: img7 },
    { id: 8, title: 'Spring Collection 8', image: img8 },
    { id: 9, title: 'Spring Collection 9', image: img9 },
    { id: 10, title: 'Spring Collection 10', image: img10 },
    { id: 11, title: 'Spring Collection 11', image: img11 },
    { id: 12, title: 'Spring Collection 12', image: img12 },
    { id: 13, title: 'Spring Collection 13', image: img13 },
    { id: 14, title: 'Spring Collection 14', image: img14 },
    { id: 15, title: 'Spring Collection 15', image: img15 },
    { id: 16, title: 'Spring Collection 16', image: img16 },
    { id: 17, title: 'Spring Collection 17', image: img17 },
    { id: 18, title: 'Spring Collection 18', image: img18 },
    { id: 19, title: 'Spring Collection 19', image: img19 },
    { id: 20, title: 'Spring Collection 20', image: img20 },
    { id: 21, title: 'Spring Collection 21', image: img21 },
    { id: 22, title: 'Spring Collection 22', image: img22 },
    { id: 23, title: 'Spring Collection 23', image: img23 },
    { id: 24, title: 'Spring Collection 24', image: img24 },
    { id: 25, title: 'Spring Collection 25', image: img25 },
    { id: 26, title: 'Spring Collection 26', image: img26 },
    { id: 27, title: 'Spring Collection 27', image: img27 },
    { id: 28, title: 'Spring Collection 28', image: img28 },
    { id: 29, title: 'Spring Collection 29', image: img29 },
    { id: 30, title: 'Spring Collection 30', image: img30 },
    { id: 31, title: 'Spring Collection 31', image: img31 },
    { id: 32, title: 'Spring Collection 32', image: img32 },
    { id: 33, title: 'Spring Collection 33', image: img33 },
    { id: 34, title: 'Spring Collection 34', image: img34 },
    { id: 35, title: 'Spring Collection 35', image: img35 },
    { id: 36, title: 'Spring Collection 36', image: img36 },
    { id: 37, title: 'Spring Collection 37', image: img37 },
    { id: 38, title: 'Spring Collection 38', image: img38 },
    { id: 39, title: 'Spring Collection 39', image: img39 },
    { id: 40, title: 'Spring Collection 40', image: img40 },
    { id: 41, title: 'Spring Collection 41', image: img41 },
    { id: 42, title: 'Spring Collection 42', image: img42 },
    { id: 43, title: 'Spring Collection 43', image: img43 },
    { id: 44, title: 'Spring Collection 44', image: img44 },
    { id: 45, title: 'Spring Collection 45', image: img45 },
    { id: 46, title: 'Spring Collection 46', image: img46 },
    { id: 47, title: 'Spring Collection 47', image: img47 },
    { id: 48, title: 'Spring Collection 48', image: img48 },
    { id: 49, title: 'Spring Collection 49', image: img49 },
    { id: 50, title: 'Spring Collection 50', image: img50 },
    { id: 51, title: 'Spring Collection 51', image: img51 },
    { id: 52, title: 'Spring Collection 52', image: img52 },
    { id: 53, title: 'Spring Collection 53', image: img53 },
    { id: 54, title: 'Spring Collection 54', image: img54 },
    { id: 55, title: 'Spring Collection 55', image: img55 },
    { id: 56, title: 'Spring Collection 56', image: img56 },
    { id: 57, title: 'Spring Collection 57', image: img57 },
    { id: 58, title: 'Spring Collection 58', image: img58 },
    { id: 59, title: 'Spring Collection 59', image: img59 },
    { id: 60, title: 'Spring Collection 60', image: img60 },
    { id: 61, title: 'Spring Collection 61', image: img61 },
    { id: 62, title: 'Spring Collection 62', image: img62 },
    { id: 63, title: 'Spring Collection 63', image: img63 },
    { id: 64, title: 'Spring Collection 64', image: img64 },
    { id: 65, title: 'Spring Collection 65', image: img65 },
    { id: 66, title: 'Spring Collection 66', image: img66 },
    { id: 67, title: 'Spring Collection 67', image: img67 },
    { id: 68, title: 'Spring Collection 68', image: img68 },
    { id: 69, title: 'Spring Collection 69', image: img69 },
    { id: 70, title: 'Spring Collection 70', image: img70 },
    { id: 71, title: 'Spring Collection 71', image: img71 },
    { id: 72, title: 'Spring Collection 72', image: img72 },
    { id: 73, title: 'Spring Collection 73', image: img73 },
  ];

  return <CollectionProducts datas={springData} />;
};

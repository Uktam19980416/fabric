import { FC, useState, FormEvent } from 'react';
import { CollectionProduct } from './CollectionProduct';
import { SpringCollectionData } from './Spring/SpringData';
import { WinterCollectionData } from './Winter/WinterData';
import { SummerCollectionData } from './Summer/Summerdata';
import { AutumnCollectionData } from './Autumn/AutumnData';
import { useTranslation } from 'react-i18next';

export const CollectionPage: FC = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [collectionType, setCollectionType] = useState('Spring');

  const {t} = useTranslation()

  const itemsPerPage = 16;

  const getCollectionData = () => {
    switch (collectionType) {
      case 'Spring':
        return SpringCollectionData;
      case 'Summer':
        return SummerCollectionData;
      case 'Autumn':
        return AutumnCollectionData;
      case 'Winter':
        return WinterCollectionData;
      default:
        return [];
    }
  };

  const datas = getCollectionData();

  const searchData = datas.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, searchData.length);
  const paginatedData = searchData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCollectionChange = (collection: string) => {
    setCollectionType(collection);
    setCurrentPage(1);
  };

  const generatePageNumbers = () => {
    const totalPages = Math.ceil(searchData.length / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((pageNumber) => (
      <button
        key={pageNumber}
        className={`px-2 py-1 mr-2 rounded-md ${currentPage === pageNumber ? 'bg-slate-200' : ''}`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <div className="container w-full max-w-[1440px] mx-auto px-2 rounded-3xl mt-10">
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <aside className="w-full lg:w-1/3 px-5 space-y-5">
          <div className="relative">
            <input
              className="w-full py-4 border-2 pl-5 rounded-full"
              type="text"
              placeholder={t("collection.filterCollection.search")}
              onChange={(e: FormEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)}
            />
            <button className="py-2 px-5 bg-orange-600 rounded-full text-slate-50 absolute right-3 top-3 hover:bg-slate-50 hover:text-orange-600 transition-all hover:border-2 hover:border-orange-600">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="flex items-center justify-between px-5">
            <p className="text-lg font-bold">{t("collection.filterCollection.collectionText")}</p>
            <div>
              <i className="fa-solid fa-greater-than text-xs"></i>
            </div>
          </div>

          <ul className="pl-10">
            <li className={`text-lg text-slate-600 cursor-pointer ${collectionType === 'Spring' ? 'font-bold text-orange-600' : ''}`} onClick={() => handleCollectionChange('Spring')}>{t("collection.filterCollection.spring")}</li>
            <li className={`text-lg text-slate-600 cursor-pointer ${collectionType === 'Winter' ? 'font-bold text-orange-600' : ''}`} onClick={() => handleCollectionChange('Winter')}>{t("collection.filterCollection.winter")}</li>
            <li className={`text-lg text-slate-600 cursor-pointer ${collectionType === 'Summer' ? 'font-bold text-orange-600' : ''}`} onClick={() => handleCollectionChange('Summer')}>{t("collection.filterCollection.summer")}</li>
            <li className={`text-lg text-slate-600 cursor-pointer ${collectionType === 'Autumn' ? 'font-bold text-orange-600' : ''}`} onClick={() => handleCollectionChange('Autumn')}>{t("collection.filterCollection.autumn")}</li>
          </ul>
        </aside>

        <div className="w-full">
          <CollectionProduct
            searchData={searchData}
            startIndex={startIndex}
            endIndex={endIndex}
            paginatedData={paginatedData}
          />
          <div className="flex justify-center mt-5">
            {generatePageNumbers()}
          </div>
        </div>
      </div>
    </div>
  );
};
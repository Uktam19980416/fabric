import { FC, useState } from 'react';
import { WinterCollectionDataType } from '../../types/types';
import { useTranslation } from 'react-i18next';

interface CollectionProductProps {
  searchData: WinterCollectionDataType[];
  startIndex: number;
  endIndex: number;
  paginatedData: WinterCollectionDataType[];
}

export const CollectionProduct: FC<CollectionProductProps> = ({
  searchData,
  startIndex,
  endIndex,
  paginatedData,
}) => {
  const { t } = useTranslation();
  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const sortedData = [...paginatedData].sort((a, b) => {
    if (sortOrder === 'ascending') {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === 'descending') {
      return b.title.localeCompare(a.title);
    } else {
      return 0;
    }
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">{t("collection.collectionTitle")}</h2>
          {t("collection.showing")} {startIndex + 1}–{endIndex} {t("collection.of")} {searchData.length}
        </div>
        <select
          className="bg-slate-700 py-2 px-5 text-slate-50 rounded-full outline-none text-lg"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="">{t("collection.initialSort")}</option>
          <option value="ascending">{t("collection.ascending")}</option>
          <option value="descending">{t("collection.descending")}</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 forSofaOnly:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5 mt-5">
        {sortedData.map((data) => (
          <div key={data.id}>
            <img
              className="w-full h-[300px] object-cover rounded-3xl"
              src={data.image}
              alt={t(data.title)}
            />
            <p className="text-lg font-bold mt-2">{t(data.title)}</p>
          </div>
        ))}
      </div>
    </>
  );
};
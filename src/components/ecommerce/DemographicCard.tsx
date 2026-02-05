import { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";
import CountryMap from "./CountryMap"; // Pastikan komponen ini dikonfigurasi untuk memuat peta Indonesia

export default function DemographicCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  // Data Demografi Indonesia
  const indonesiaData = [
    {
      region: "Jawa Barat",
      count: "2,379",
      percentage: "79%",
      icon: "./images/country/indonesia.svg", // Sesuaikan path icon bendera/lokasi
    },
    {
      region: "DKI Jakarta",
      count: "589",
      percentage: "23%",
      icon: "./images/country/indonesia.svg",
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Demografi Pelanggan
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Jumlah pelanggan berdasarkan wilayah di Indonesia
          </p>
        </div>
        <div className="relative inline-block">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="w-40 p-2"
          >
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Lihat Detail
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Hapus
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className="px-4 py-6 my-6 overflow-hidden border border-gray-200 rounded-2xl dark:border-gray-800 sm:px-6">
        <div
          id="mapOne"
          className="mapOne map-btn -mx-4 -my-6 h-[212px] w-full flex justify-center items-center"
        >
          {/* Komponen CountryMap harus dipastikan memanggil map: 'indonesia' */}
          <CountryMap />
        </div>
      </div>

      <div className="space-y-5">
        {indonesiaData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="items-center w-full rounded-full max-w-8">
                <img src={item.icon} alt={item.region} className="rounded-full" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                  {item.region}
                </p>
                <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                  {item.count} Pelanggan
                </span>
              </div>
            </div>

            <div className="flex w-full max-w-[140px] items-center gap-3">
              <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                <div 
                  className="absolute left-0 top-0 h-full rounded-sm bg-brand-500"
                  style={{ width: item.percentage }}
                ></div>
              </div>
              <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                {item.percentage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
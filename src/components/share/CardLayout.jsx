import React from "react";

export default function CardLayout({ CardConfig, data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.isArray(CardConfig) &&
        CardConfig.map((card, idx) => (
          <div
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            key={idx}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div
                className={
                  "bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center"
                }
              >
                <span className="text-white text-xl font-semibold">
                  {card.first_name?.[0]}
                  {card.last_name?.[0]}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.first_name} {card.last_name}
                </h3>
                <p className="text-gray-600">{card.email}</p>
              </div>
            </div>
            <div className="space-y-2  text-gray-700">
              {data &&
                data.map((col, index) => (
                  <div key={index}>
                    {col.showLabel !== false && (
                      <span className="font-medium">{col.label}  </span>
                    )}
                    <span>
                      {col.cell ? col.cell(card) : card[col.key] ?? "—"}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { CATEGORIES } from "../data/projects";

interface CategoryFilterProps {
    active: string;
    onChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ active, onChange }) => {
    const { t } = useLanguage();

    return (
        <div className="category-filter">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat.id}
                    className={`category-filter-btn ${active === cat.id ? "active" : ""}`}
                    onClick={() => onChange(cat.id)}
                >
                    {t(cat.labelEn, cat.labelCn)}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;

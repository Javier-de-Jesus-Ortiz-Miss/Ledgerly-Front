import React from "react";


interface Debt {
    id: string;
    title: string;
    creditor: string;
    amount: number;
}

interface CardDebtProps {
    debt: Debt;
}
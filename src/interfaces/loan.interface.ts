export interface ILoan {
    id: string,
    book_id: string,
    borrower_id: string,
    owner_id: string,
    loan_date: string,
    return_date: string,
    actual_return_date: string,
    status: string
}
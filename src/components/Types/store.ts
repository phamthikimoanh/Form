export interface RedInvoice {
    name: string;
    address: string;
    district: string;
    city: string;
    taxCode: string;
}
interface StoreJson {
    id: string;
    logoUrl: string;
    name: string;
    address: string;
    district: string;
    city: string;
    phone: string;
    redInvoice: RedInvoice;
}
class Store {
    constructor(
        public id: string,
        public logoUrl: string,
        public name: string,
        public address: string,
        public district: string,
        public city: string,
        public phone: string,
        public redInvoice: RedInvoice,
    ) { }
    toJSON(): StoreJson {
        return Object.assign(
            {},
            {
                id: this.id,
                logoUrl: this.logoUrl,
                name: this.name,
                address: this.address,
                district: this.district,
                city: this.city,
                phone: this.phone,
                redInvoice: this.redInvoice,
            }
        )
    }
}
export default Store;
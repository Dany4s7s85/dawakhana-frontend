import { Fetch } from 'helpers/fetchWrapper';
import { useCancellablePromise } from 'helpers/promiseHandler';
import { useEffect, useState } from 'react';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const productService = {
  _url: `${process.env.REACT_APP_PRODUCTS_API_URL}-products`,

  GetProducts(searchQuery, refetch) {
    const [products, setProducts] = useState({
      products: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [productStatus, setProductStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setProductStatus(STATUS.LOADING);
      cancellablePromise(this.getProducts(searchQuery))
        .then(res => {
          setProducts(() => res);
          setProductStatus(STATUS.SUCCESS);
        })
        .catch(() => setProductStatus(STATUS.ERROR));
    }, [
      searchQuery?.page,
      searchQuery?.pageSize,
      searchQuery?.status,
      searchQuery?.searchText,
      searchQuery?.limited,
      refetch,
    ]);
    return {
      products_loading: productStatus === STATUS.LOADING,
      products_error: productStatus === STATUS.ERROR ? productStatus : '',
      products_data: products,
    };
  },
  GetProductGroups(searchQuery, refetch) {
    const [products, setProducts] = useState({
      products: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [productStatus, setProductStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setProductStatus(STATUS.LOADING);
      cancellablePromise(this.getProductGroups(searchQuery))
        .then(res => {
          setProducts(() => res);
          setProductStatus(STATUS.SUCCESS);
        })
        .catch(() => setProductStatus(STATUS.ERROR));
    }, [searchQuery?.page, searchQuery?.pageSize, searchQuery?.searchText, refetch]);
    return {
      products_loading: productStatus === STATUS.LOADING,
      products_error: productStatus === STATUS.ERROR ? productStatus : '',
      products_data: products,
    };
  },
  GetProductsForSingleGroup(searchQuery, refetch) {
    const [products, setProducts] = useState({
      products: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [productStatus, setProductStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setProductStatus(STATUS.LOADING);
      cancellablePromise(this.getProductsForSingleGroup(searchQuery))
        .then(res => {
          setProducts(() => res);
          setProductStatus(STATUS.SUCCESS);
        })
        .catch(() => setProductStatus(STATUS.ERROR));
    }, [searchQuery?.page, searchQuery?.searchText, searchQuery.groupId, refetch]);
    return {
      products_loading: productStatus === STATUS.LOADING,
      products_error: productStatus === STATUS.ERROR ? productStatus : '',
      products_data: products,
    };
  },
  async getProducts({ getAll, page, pageSize, status, searchText, limited }) {
    let res = await Fetch.get(
      `${this._url}/products?getAll=${getAll}&page=${page}&itemsPerPage=${pageSize}&status=${status}&searchText=${searchText}&limited=${limited}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async deleteProduct(id) {
    let res = await Fetch.delete(`${this._url}/products/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async createProduct(payload) {
    let res = await Fetch.post(`${this._url}/products`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async editProduct(id, payload) {
    let res = await Fetch.put(`${this._url}/products/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async approveProduct(id, all) {
    let res = await Fetch.put(`${this._url}/approve-product/${id}?all=${all}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getProductDetails(barcode) {
    let res = await Fetch.get(`${this._url}/products/${barcode}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getBarCodeDetails(barcode) {
    let res = await Fetch.get(`${this._url}/get-upc-details?barcode=${barcode}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async addBulkProducts(products) {
    let res = await Fetch.post(`${this._url}/bulk-products`, products);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getProductsForCategories(searchText, category_id) {
    let res = await Fetch.get(`${this._url}/category-products?searchText=${searchText ?? ''}&id=${category_id ?? ''}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getProductGroups({ page = 1, pageSize = 5, searchText = '' }) {
    const res = await Fetch.get(
      `${this._url}/products-groups?page=${page}&itemsPerPage=${pageSize}&searchText=${searchText}`,
    );
    if (res.status >= 200 && res.status < 300) {
      const { items: products, totalItems } = await res.json();
      return {
        products,
        totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getSpecificProductGroups(payload) {
    let res = await Fetch.post(`${this._url}/specific-product-groups`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getMultiFilterProducts({ page, categories, brands, sizes, forms }) {
    let res = await Fetch.post(`${this._url}/multi-filter-products?page=${page ?? 1}`, {
      categories,
      brands,
      sizes,
      forms,
    });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getMultiFilterSize({ searchText, categories, brands, forms }) {
    let res = await Fetch.post(`${this._url}/multi-filter-sizes?searchText=${searchText ?? ''}`, {
      categories,
      brands,
      forms,
    });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getMultiFilterForms({ searchText, categories, brands, sizes }) {
    let res = await Fetch.post(`${this._url}/multi-filter-forms?searchText=${searchText ?? ''}`, {
      categories,
      brands,
      sizes,
    });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getProductsForSingleBrand(searchText, brands) {
    let res = await Fetch.post(`${this._url}/brands-products?searchText=${searchText}`, {
      brands,
    });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getProductsForSingleGroup({ page = 1, searchText = '', groupId }) {
    const res = await Fetch.get(`${this._url}/products/for-group/${groupId}?searchText=${searchText}&page=${page}`);
    if (res.status >= 200 && res.status < 300) {
      const { items: products, totalItems } = await res.json();
      return {
        products,
        totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async createProductGroup(body) {
    let res = await Fetch.post(`${this._url}/products-groups`, body);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async deleteProductGroup(id) {
    let res = await Fetch.delete(`${this._url}/products-groups/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async editProductGroup(id, body) {
    let res = await Fetch.put(`${this._url}/products-groups/${id}`, body);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getProductsByIds(ids) {
    let res = await Fetch.post(`${this._url}/products-by-ids`, { ids });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  // ------------------------>>>>>categories<<<<<---------------------------

  async getCategories({ page = 1, pageSize = 10, getAll = 'false', status = '', searchText = '', limited = false }) {
    let res = await Fetch.get(
      `${this._url}/categories?getAll=${getAll}&page=${page}&itemsPerPage=${pageSize}&status=${status}&searchText=${searchText}&limited=${limited}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getCategoriesForBrand(searchText, id) {
    let res = await Fetch.get(`${this._url}/brand-categories?searchText=${searchText ?? ''}&id=${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getMultiFilterCategories({ searchText, brands, sizes, forms }) {
    let res = await Fetch.post(`${this._url}/multi-filter-categories?searchText=${searchText ?? ''}`, {
      brands,
      sizes,
      forms,
    });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  // ------------------------>>>>>brands<<<<<---------------------------

  async getBrands({ page = 1, pageSize = 10, getAll = false, status = '', searchText = '', id = '', limited = false }) {
    let res = await Fetch.get(
      `${this._url}/brands?getAll=${getAll}&page=${page}&itemsPerPage=${pageSize}&status=${status}&searchText=${searchText}&id=${id}&limited=${limited}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getMultiFilterBrands({ searchText, id, categories, sizes, forms }) {
    let res = await Fetch.post(`${this._url}/multi-filter-brands?searchText=${searchText}&id=${id}`, {
      categories,
      sizes,
      forms,
    });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async createBrands(payload) {
    let res = await Fetch.post(`${this._url}/brands`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async updateBrands(payload) {
    let res = await Fetch.put(`${this._url}/brands`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async deleteBrand(id) {
    let res = await Fetch.delete(`${this._url}/brands/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getSubBrands({
    page = 1,
    pageSize = 10,
    getAll = 'false',
    status = '',
    searchText = '',
    id = '',
    limited = false,
  }) {
    let res = await Fetch.get(
      `${this._url}/sub-brands?getAll=${getAll}&page=${page}&itemsPerPage=${pageSize}&status=${status}&searchText=${searchText}&id=${id}&limited=${limited}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async createSubBrands(payload) {
    let res = await Fetch.post(`${this._url}/sub-brands`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async updateSubBrands(id, payload) {
    let res = await Fetch.put(`${this._url}/sub-brands/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async deleteSubBrand(id) {
    let res = await Fetch.delete(`${this._url}/sub-brands/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getAllBrandsAsync({
    page = 1,
    pageSize = 10,
    searchText = '',
    company_id = '',
    getAll = false,
    limited = true,
  }) {
    let res = await Fetch.get(
      `${this._url}/brands?page=${page}&itemsPerPage=${pageSize}&searchText=${searchText}&id=${company_id}&getAll=${getAll}&limited=${limited}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        brands: res.map(({ brand_name, _id }) => ({ label: brand_name, value: _id })),
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getMultiBrandssAsync({ searchText = '', category = [], forms = [], sizes = [] }) {
    let res = await Fetch.post(`${this._url}/multi-filter-brands?searchText=${searchText}`, {
      category,
      forms,
      sizes,
    });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        brands: res.map(({ brand_name, _id }) => ({ label: brand_name, value: _id })),
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getSelectedBrandProducts({ searchText = '', brands = [] }) {
    let res = await Fetch.post(`${this._url}/brands-products?searchText=${searchText}`, {
      brands,
    });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async sendToBrandAmbassador(data) {
    let res = await Fetch.post(`${this._url}/csv-history`, data);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default productService;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    products: [],
    isLoading: "IDLE" | "PENDING" | "SUCCESS" | "ERROR",
    error: null,
    product: {}

};



 export const getAllProducts = createAsyncThunk(
     'Products/getAll',
     async(param, thunkAPI) => {
    try {
        const response = await fetchAllProducts()
        return response
    } catch (err) {
        throw err
    }
});

export const getFeaturedProducts = createAsyncThunk(
    'Products/getFeatured', async (category, thunkAPI) => {
        try {
            const response = await fetchFeaturedProducts(category)
            return response
        } catch (err) {
            throw err
        }
    }
)

export const getProductsByCatergory = createAsyncThunk(
    'Products/getByProducts', async (category, thunkAPI) => {
        try {
            const response = await fetchProductsByCategory(category)
            return response
        } catch (err) {
          throw err   
        }
    }
)

const productSlice = createSlice({
    name: "Products", 
    initialState: initialState, 
    reducers: {
        selectProduct: (state, action) => {
            state.product = action.payload
            state.isLoading = 3
        }
            
    },
    extraReducers:  builder =>  {
        builder 
            .addCase(getAllProducts.pending, (state, action) => {
                state.isLoading = 2
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                 state.isLoading = 3
                 state.products = action.payload
            })
            .addCase(getFeaturedProducts.pending, (state, action) => {
                state.isLoading = 2
            })
            .addCase(getFeaturedProducts.fulfilled, (state, action) => {
                state.isLoading = 3
                state.products = action.payload
            })
            .addCase(getProductsByCatergory.pending, (state, action) => {
                state.isLoading = 2
            })
            .addCase(getProductsByCatergory, (state, action) => {
                state.isLoading = 3
                state.products = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = 4
                state.error = action.payload
            })
             .addCase(getFeaturedProducts.rejected, (state, action) => {
                state.isLoading = 4
                state.error = action.payload
            })
              .addCase(getProductsByCatergory.rejected, (state, action) => {
                state.isLoading = 4
                state.error = action.payload
            })
    }
})
  
export default productSlice.reducer
 
export const selectSingleProduct = (state) => state.state.product

export const {selectProduct} = productSlice.actions

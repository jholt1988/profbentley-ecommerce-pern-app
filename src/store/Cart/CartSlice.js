import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: "IDLE" | "PENDING" | "SUCCESS" | "ERROR",
    error: null, 
    cart: [], 
    items: []
}

export const loadCart = createAsyncThunk(
    'Cart/loadCart', async (userId, thunkAPI) => {
        try {
            const cart = await fetchUserCart(userId);
            return cart 
        } catch (err) {
            throw (err);
        }
    }
)

export const updateCart = createAsyncThunk(
    'Cart/updateCart', async (data, thunkAPI) => {
        try {
            const response = await updateUserCart(data);
            return response
        } catch (err) {
            throw err
        }
    }
)

export const checkout = createAsyncThunk(
    'Cart/checkout', async (data, thunnkAPI) => {
        try {
            const response = await checkoutUserCart
            return response
        } catch (err) {

        }
    }
)


const CartSlice = createSlice({
    name: "Cart",
    initialState: initialState,
    reducers: {
        createCartPending: (state) => {
            state.isLoading = 2
        },

        createCartSuccess: (state, action) => {
            state.isLoading = 3
            state.cart = action.payload
        },
        createCartError: (state, action) => {
            state.isLoading = 4
            state.error = action.payload
        },
        addCartItemPending: (state, action) => {
            state.isLoading = 2
            state.error = null
        },
        addCartItemSuccess: (state, action) => {
            state.isLoading = 3
            state.items = state.items.push(action.payload)
        },
        addItemsError: (state, action) => {
            state.isLoading = 4
            state.error = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadCart.pending, (state, action) => {
                state.isLoading = 2;
            })
            .addCase(loadCart.fulfilled, (state, action) => {
                state.isLoading = 3;
                state.cart = action.payload.cart;
                state.items = action.payload.items;
            })
            .addCase(loadCart.rejected, (state, action) => {
                state.isLoading = 4;
                state.error = action.payload
            })
        lder
            .addCase(updateCart.pending, (state, action) => {
                state.isLoading = 2;
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.isLoading = 3;
                state.cart = action.payload.cart;
                state.items = action.payload.items;
            })
            .addCase(updateCart.rejected, (state, action) => {
                state.isLoading = 4;
                state.error = action.payload
            })
        lder
            .addCase(checkout.pending, (state, action) => {
                state.isLoading = 2;
            })
            .addCase(checkout.fulfilled, (state, action) => {
                state.isLoading = 3;
                state.cart = action.payload.cart;
                state.items = action.payload.items;
            })
            .addCase(checkout.rejected, (state, action) => {
                state.isLoading = 4;
                state.error = action.payload
            })
    }
})
        export default CartSlice.reducer

        const selectCart = state => state.state.cart;
        const selectItem =  state => state.state.items;

        const {
            createCartPending,
            createCartSuccess,
            createCartError,
            addCartItemPending,
            addCartItemSuccess,
            addItemsError
        } = CartSlice.actions;
Note: I have explicitly focused in the given scenarios, for example, row selection is not implemented.

## 1: Architecture Overview for the UI Scenario

### Main Screen (Products List)
- Displays a list of products with basic information like name, price, and units.
- Acts as the primary interface where users can interact with their product data.

### Add Product (Modal)
- Opens as a pop-up window when users want to add a new product.
- Allows users to:
  - Enter product details (e.g., name, description, price).
  - Select a measurement unit from a dropdown ( search included) or create a custom one.

### Units Selector
- Integrated into the modal for selecting measurement units.
- Fetches a list of pre-defined units from the server.
- If the desired unit does not exists, users can add a custom unit, which will automatically be included in the dropdown and display a created notification.

### Data Management
- **Products List:** Keeps track of all products displayed on the main screen.
- **Units List:** Manages the available measurement units for the dropdown.
- Both lists update dynamically as users add new products or units.

### Server Communication
- The app interacts with the server to:
  - Fetch the list of products when `Products` is loaded.
  - Fetch the list of measurement units when the modal opens.
  - Add new custom units or products if needed in the future.

### User Flow
1. Users see all their products on the main screen.
2. Clicking **"Add New"** opens the modal for adding a new product.
3. Inside the modal, users can:
   - Enter product details.
   - Select a pre-defined unit or create a custom one.
4. After saving, the new product appears instantly in the main product list.

---

## 2: Components Architecture Overview

![image](https://github.com/user-attachments/assets/a04f00dc-c501-4e10-b007-976454a751a7)

# E-Commerce Mini Project

## 📌 Project Overview
This is a **Node.js-based E-Commerce Mini Project** that serves product details using the `http` module. It dynamically replaces placeholders in HTML templates with product data stored in `data.json` and serves three different pages:

1. **Home Page (`/`)** - The landing page with an introduction to the store.
2. **Overview Page (`/overview`)** - Displays a list of all available products.
3. **Product Page (`/product?id=xyz`)** - Shows detailed information for a specific product.

## 🏗️ Project Structure
```
E-Commerce-Project/
│── data/
│   ├── data.json          # Stores product details
│── modules/
│   ├── replaceTemplate.js # Function to replace placeholders in HTML templates
│── node_modules/          # Installed dependencies
│── templates/
│   ├── home.html          # Home page template
│   ├── overview.html      # Overview page template
│   ├── product.html       # Product details template
│   ├── card.html          # Used to display individual product cards
│── content.txt            # (Optional) Any additional content
│── index.js               # Main server file
│── package.json           # Project metadata and dependencies
│── package-lock.json      # Locks the package versions
```

## 🛠️ Technologies Used
- **Node.js** (Built-in `http` module for server-side logic)
- **JavaScript** (Backend scripting and template replacement)
- **HTML & CSS** (Frontend design)

## 📦 Dependencies
The project includes the following Node.js dependencies:

```json
{
  "dependencies": {
    "slugify": "^1.6.6"  // Installed but not used
  },
  "devDependencies": {
    "nodemon": "^2.0.15"  // Used for efficient server restarts
  }
}
```

## 🚀 How to Run the Project
### 1️⃣ Clone the Repository
```sh
git clone <repository-url>
cd E-Commerce-Project
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Server

**before running this project** 
***use this command***
```
npm init -y
```
**after that go to package.json file and there change the script attribute as scripts{ 'start':'nodemon index.js' }**

**Now you can directly use**
```
npm start
```

```sh
nodemon index.js
```

### 4️⃣ Open in Browser
Visit `http://localhost:8000/` to view the homepage.

## 🔄 URL Routing
| Route               | Description |
|---------------------|-------------|
| `/`                | Home Page |
| `/overview`        | Displays all products |
| `/product?id=xyz`  | Shows specific product details |

## 📌 Features
✅ Serves dynamic pages using Node.js `http` module  
✅ Uses a JSON file to store product data  
✅ Manually replaces placeholders in HTML templates  
✅ Runs efficiently using `nodemon`

## 📜 Future Improvements
- Implement `slugify` to create cleaner URLs
- Use `express.js` for better routing
- Add a database instead of `data.json`

---
**Created with ❤️ using Node.js**


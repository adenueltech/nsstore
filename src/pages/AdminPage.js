import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';  // Adjust the import path as necessary
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import Nav from '../components/AdminNav';  // Adjust the path based on where your Nav component is located

const AdminPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state
  const [products, setProducts] = useState([]); // To store fetched products
  const [editingProductId, setEditingProductId] = useState(null); // Track the product being edited

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const querySnapshot = await getDocs(productsCollection);
        const productsArray = [];
        querySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProducts(productsArray);
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products: ', error.message);
      }
    };

    fetchProducts();
  }, []);

  // Handle form submission for adding or editing a product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear error message

    // Validate input fields
    if (!name || !description || !price || !image) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    try {
      if (editingProductId) {
        // Update product
        const productDoc = doc(db, 'products', editingProductId);
        await updateDoc(productDoc, {
          name,
          description,
          price: parseFloat(price),
          image,
        });

        alert('Product updated successfully!');
        setEditingProductId(null); // Reset editing state
      } else {
        // Add new product
        const productsCollection = collection(db, 'products');
        await addDoc(productsCollection, {
          name,
          description,
          price: parseFloat(price),
          image,
          createdAt: serverTimestamp(),
        });

        alert('Product added successfully!');
      }

      // Reset form after submitting
      setName('');
      setDescription('');
      setPrice('');
      setImage('');
    } catch (error) {
      console.error('Error saving product: ', error);
      setError('Error saving product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle deleting a product
  const handleDelete = async (id) => {
    try {
      const productDoc = doc(db, 'products', id);
      await deleteDoc(productDoc);
      alert('Product deleted successfully!');
      setProducts(products.filter(product => product.id !== id)); // Update local state to reflect the change
    } catch (error) {
      console.error('Error deleting product: ', error);
      alert('Error deleting product. Please try again.');
    }
  };

  // Handle editing a product
  const handleEdit = (product) => {
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setImage(product.image);
    setEditingProductId(product.id);
  };

  return (
    <div>
      <Nav /> {/* Render the Nav component */}

      <div className="admin-panel px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Admin Panel</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        {/* Product form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Product Image URL (from /public/images)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            {loading ? 'Saving...' : editingProductId ? 'Update Product' : 'Add Product'}
          </button>
        </form>

        <h2 className="text-2xl font-semibold mt-8">Product History</h2>
        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          <div className="flex flex-wrap gap-6 mt-4">
            {products.map((product) => (
              <div key={product.id} className="w-72 bg-white p-4 shadow-lg rounded-lg flex flex-col items-center">
                <img
                  src={`/images/${product.image}`} // Assuming product.image contains the image name or path from public/images
                  alt={product.name}
                  className="w-48 h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-xl font-bold mt-2">${product.price}</p>
                <div className="flex mt-4 gap-2">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;

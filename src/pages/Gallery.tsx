import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useTranslation } from 'react-i18next';
import { Play, Image as ImageIcon, X, Maximize2, Camera, Film } from 'lucide-react';

// Use existing assets
import pandeImage from '@/assets/destination-pande.jpg';
import mikumiImage from '@/assets/destination-mikumi.jpg';
import selousImage from '@/assets/destination-selous.jpg';
import heroWildlifeImage from '@/assets/hero-wildlife.jpg';

const categories = ['All', 'Wildlife', 'Nature', 'Conservation', 'Videos'];

const galleryItems = [
    { id: 1, type: 'image', category: 'Wildlife', src: heroWildlifeImage, title: 'King of the Savannah', location: 'Serengeti' },
    { id: 2, type: 'video', category: 'Videos', src: selousImage, title: 'Morning Patrol', location: 'Selous GR', videoUrl: '#' },
    { id: 3, type: 'image', category: 'Nature', src: mikumiImage, title: 'Golden Hour Delta', location: 'Mikumi' },
    { id: 4, type: 'image', category: 'Wildlife', src: pandeImage, title: 'Leopard in Wait', location: 'Pande GR' },
    { id: 5, type: 'image', category: 'Conservation', src: selousImage, title: 'Anti-Poaching Unit', location: 'Selous' },
    { id: 6, type: 'video', category: 'Videos', src: heroWildlifeImage, title: 'River Crossing', location: 'Grumeti', videoUrl: '#' },
    { id: 7, type: 'image', category: 'Wildlife', src: mikumiImage, title: 'Elephant Gathering', location: 'Mikumi' },
    { id: 8, type: 'image', category: 'Nature', src: pandeImage, title: 'Baobab Silhouette', location: 'Tarangire' },
    { id: 9, type: 'image', category: 'Wildlife', src: heroWildlifeImage, title: 'Pride of Lions', location: 'Serengeti' },
];

export default function Gallery() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory || (activeCategory === 'Videos' && item.type === 'video'));

    return (
        <Layout>
            <div className="pt-32 pb-20 bg-background">
                <div className="container-safari">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1 bg-jungle/10 text-jungle rounded-full text-xs font-black uppercase tracking-widest mb-4"
                        >
                            Visual Heritage
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-heading font-black text-foreground mb-6"
                        >
                            Wildlife <span className="text-jungle">Gallery</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
                        >
                            Explore the breathtaking beauty of Tanzania's protected areas through our collection of premium photography and film.
                        </motion.p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat, idx) => (
                            <motion.button
                                key={cat}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 ${activeCategory === cat
                                        ? 'bg-jungle border-jungle text-white shadow-glow'
                                        : 'bg-transparent border-border text-muted-foreground hover:border-jungle hover:text-jungle'
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative group cursor-pointer break-inside-avoid rounded-3xl overflow-hidden border-4 border-transparent hover:border-jungle/50 transition-all duration-500 shadow-lg"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white">
                                            {item.type === 'video' ? <Film className="w-4 h-4" /> : <Camera className="w-4 h-4" />}
                                        </div>

                                        <div className="absolute bottom-6 left-6 right-6 text-white">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-jungle-yellow mb-1">{item.location}</div>
                                            <h3 className="text-xl font-heading font-bold">{item.title}</h3>
                                        </div>

                                        {item.type === 'video' && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                                                    <Play className="w-5 h-5 text-white fill-white ml-1" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100001] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
                        onClick={() => setSelectedItem(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedItem(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-jungle-dark"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedItem.src}
                                alt={selectedItem.title}
                                className="w-full h-full object-cover"
                            />

                            {selectedItem.type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                    <div className="w-24 h-24 bg-jungle-yellow rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                                        <Play className="w-10 h-10 text-jungle-dark fill-jungle-dark ml-2" />
                                    </div>
                                </div>
                            )}

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <span className="text-jungle-yellow text-xs font-black uppercase tracking-[0.2em] mb-2 block">{selectedItem.location}</span>
                                        <h2 className="text-2xl md:text-4xl text-white font-heading font-black">{selectedItem.title}</h2>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col items-center">
                                                <span className="text-white/40 text-[10px] font-black uppercase mb-1">Type</span>
                                                <span className="text-white text-sm font-bold uppercase">{selectedItem.type}</span>
                                            </div>
                                            <div className="w-[1px] h-8 bg-white/20" />
                                            <div className="flex flex-col items-center">
                                                <span className="text-white/40 text-[10px] font-black uppercase mb-1">Category</span>
                                                <span className="text-white text-sm font-bold uppercase">{selectedItem.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Layout>
    );
}

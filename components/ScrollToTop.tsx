'use client';
import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    // 'auto' evita animação em primeira pintura
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return null;
}

import { renderHook, act } from '@testing-library/react';
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifAtions from '../actions/get-gifs-by-query.action';


describe('useGifs', () => {

  test('should return default values and methods', () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermCLicked).toBeDefined();
  });

  test('should return a list of gifs', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch('goku');
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test('should return a list of gifs when handleTermClicked is called', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermCLicked('goku');
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test('should return a list of gifs from cache', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermCLicked('goku');
    });

    expect(result.current.gifs.length).toBe(10);

    vi.spyOn(gifAtions, 'getGifsByQuery')
    .mockRejectedValue(new Error('This is my custom error'));

    await act(async () => {
      await result.current.handleTermCLicked('goku');
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test('should return no more than 8 previous terms', async () => {
    const { result } = renderHook( () => useGifs());

    vi.spyOn(gifAtions, 'getGifsByQuery').mockResolvedValue([]);

    await act ( async() => {
      await result.current.handleSearch('goku1');
    });

    await act ( async() => {
      await result.current.handleSearch('goku2');
    });

    await act ( async() => {
      await result.current.handleSearch('goku3');
    });

    await act ( async() => {
      await result.current.handleSearch('goku4');
    });

    await act ( async() => {
      await result.current.handleSearch('goku5');
    });

    await act ( async() => {
      await result.current.handleSearch('goku6');
    });


    expect(result.current.previousTerms.length).toBe(5);
    console.log(result.current.previousTerms);
    expect(result.current.previousTerms).toStrictEqual([ 'goku6', 'goku5', 'goku4', 'goku3', 'goku2' ]);
  });

});
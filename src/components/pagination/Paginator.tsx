import React from 'react';

import {
    Pagination,
    PaginationContainer,
    PaginationNext,
    PaginationPage,
    PaginationPageGroup,
    PaginationPrevious,
    PaginationSeparator,
} from '@ajna/pagination';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import { Text } from '@chakra-ui/react';

interface PaginatorProps {
    pagesCount: number;
    currentPage: number;
    pages: number[];
    setCurrentPage: (value: React.SetStateAction<number>) => void;
}

const Paginator = ({ pagesCount, currentPage, pages, setCurrentPage }: PaginatorProps) => {
    // handlers
    const handlePageChange = (nextPage: number): void => {
        setCurrentPage(nextPage);
    };

    return (
        <Pagination
            pagesCount={pagesCount}
            currentPage={currentPage}
            onPageChange={handlePageChange}
        >
            <PaginationContainer align="center" justify="end" p={4}>
                <PaginationPrevious
                    _hover={{
                        bg: 'transparent',
                    }}
                    leftIcon={<HiArrowLeft />}
                    bg="transparent"
                >
                    <Text color="primary.teal">Prev</Text>
                </PaginationPrevious>
                <PaginationPageGroup
                    align="center"
                    separator={
                        <PaginationSeparator
                            bg="transparent"
                            fontSize="sm"
                            color="placeHolderIconColor"
                            w={7}
                            jumpSize={11}
                        />
                    }
                >
                    {pages.map((page: number) => (
                        <PaginationPage
                            w={7}
                            bg="transparent"
                            key={`pagination_page_${page}`}
                            page={page}
                            fontWeight={400}
                            color="placeHolderIconColor"
                            _hover={{
                                bg: 'tranparent',
                            }}
                            _current={{
                                bg: 'trenasparent',
                                color: 'primary.light',
                                fontWeight: 500,
                                w: 7,
                            }}
                        />
                    ))}
                </PaginationPageGroup>
                <PaginationNext
                    _hover={{
                        bg: 'transparent',
                    }}
                    bg="transparent"
                    rightIcon={<HiArrowRight />}
                >
                    <Text color="primary.teal">Next</Text>
                </PaginationNext>
            </PaginationContainer>
        </Pagination>
    );
};

export default Paginator;

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Debian 14.4-1.pgdg110+1)
-- Dumped by pg_dump version 14.4

-- Started on 2024-04-12 16:42:32 PDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -;
--


--
-- TOC entry 3338 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -;
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16395)
-- Name: authors; Type: TABLE; Schema: public;
--

CREATE TABLE public.authors (
    id integer NOT NULL,
    name text,
    email text,
    date_of_birth timestamp without time zone,
    profile_photo_path text
);


--
-- TOC entry 209 (class 1259 OID 16394)
-- Name: authors_id_seq; Type: SEQUENCE; Schema: public;
--

CREATE SEQUENCE public.authors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3339 (class 0 OID 0)
-- Dependencies: 209
-- Name: authors_id_seq; Type: SEQUENCE OWNED BY; Schema: public;
--

ALTER SEQUENCE public.authors_id_seq OWNED BY public.authors.id;


--
-- TOC entry 212 (class 1259 OID 16404)
-- Name: books; Type: TABLE; Schema: public;
--

CREATE TABLE public.books (
    id integer NOT NULL,
    author_id integer,
    isbn text
);

--
-- TOC entry 211 (class 1259 OID 16403)
-- Name: books_id_seq; Type: SEQUENCE; Schema: public;
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3340 (class 0 OID 0)
-- Dependencies: 211
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public;
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- TOC entry 214 (class 1259 OID 16418)
-- Name: sale_items; Type: TABLE; Schema: public;
--

CREATE TABLE public.sale_items (
    id integer NOT NULL,
    book_id integer,
    customer_name text,
    item_price money,
    quantity integer
);

--
-- TOC entry 213 (class 1259 OID 16417)
-- Name: sale_items_id_seq; Type: SEQUENCE; Schema: public;
--

CREATE SEQUENCE public.sale_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- TOC entry 3341 (class 0 OID 0)
-- Dependencies: 213
-- Name: sale_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public;
--

ALTER SEQUENCE public.sale_items_id_seq OWNED BY public.sale_items.id;


--
-- TOC entry 3177 (class 2604 OID 16398)
-- Name: authors id; Type: DEFAULT; Schema: public;
--

ALTER TABLE ONLY public.authors ALTER COLUMN id SET DEFAULT nextval('public.authors_id_seq'::regclass);


--
-- TOC entry 3178 (class 2604 OID 16407)
-- Name: books id; Type: DEFAULT; Schema: public;
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- TOC entry 3179 (class 2604 OID 16421)
-- Name: sale_items id; Type: DEFAULT; Schema: public;
--

ALTER TABLE ONLY public.sale_items ALTER COLUMN id SET DEFAULT nextval('public.sale_items_id_seq'::regclass);


--
-- TOC entry 3328 (class 0 OID 16395)
-- Dependencies: 210
-- Data for Name: authors; Type: TABLE DATA; Schema: public;
--

COPY public.authors (id, name, email, date_of_birth, profile_photo_path) FROM stdin;
1	Hank Hodge	hank.hodge@bookly.com	1989-06-01 00:00:00	/images/profile-photos/Group 24.svg
2	Darin Hubbard	darin.hubbard@bookly.com	2005-11-05 00:00:00	/images/profile-photos/Group 27.svg
3	Jayson Huber	jayson.huber@bookly.com	1998-01-29 00:00:00	/images/profile-photos/Group 29.svg
4	Taylor Cobb	taylor.cobb@bookly.com	2005-01-10 00:00:00	/images/profile-photos/Group 26.svg
5	Steve Bender	steve.bender@bookly.com	1998-11-09 00:00:00	/images/profile-photos/Group 33.svg
6	Rodney Potts	rodney.potts@bookly.com	1991-01-22 00:00:00	/images/profile-photos/Group 35.svg
7	Elroy Spencer	elroy.spencer@bookly.com	2005-05-27 00:00:00	/images/profile-photos/Group 37.svg
8	Alyce Mccormick	alyce.mccormick@bookly.com	2000-04-09 00:00:00	/images/profile-photos/Group 30.svg
9	Candace Deleon	candace.deleon@bookly.com	2003-07-21 00:00:00	/images/profile-photos/Group 31.svg
10	Gracie Barajas	gracie.barajas@bookly.com	2001-03-28 00:00:00	/images/profile-photos/Group 32.svg
11	Jaime Hayden	jaime.hayden@bookly.com	1985-12-13 00:00:00	/images/profile-photos/Group 39.svg
12	Alyssa Saunders	alyssa.saunders@bookly.com	1987-10-25 00:00:00	/images/profile-photos/Group 34.svg
13	Nellie Ellison	nellie.ellison@bookly.com	1994-04-03 00:00:00	/images/profile-photos/Group 44.svg
14	Cody Frost	cody.frost@bookly.com	1986-02-24 00:00:00	/images/profile-photos/Group 48.svg
16	Lorelai Gilmore	lorelai.gilmore@bookly.com	1968-04-25 00:00:00	/images/profile-photos/Group 38.svg
15	Cindy Rivers	cindy.rivers@bookly.com	2004-03-13 00:00:00	/images/profile-photos/Group 40.svg
\.

--
-- TOC entry 3330 (class 0 OID 16404)
-- Dependencies: 212
-- Data for Name: books; Type: TABLE DATA; Schema: public;
--

COPY public.books (id, author_id, isbn) FROM stdin;
1	16	0-9432-4626-1
2	16	0-3779-8740-9
3	1	0-3854-1941-4
4	2	0-6858-3234-1
5	3	0-5310-9341-7
6	4	0-2354-5193-2
7	5	0-7648-5854-8
8	6	0-3359-4375-6
9	7	0-8213-1711-3
10	8	0-6008-4360-2
11	9	0-5441-6130-0
12	10	0-2573-9083-9
\.


--
-- TOC entry 3332 (class 0 OID 16418)
-- Dependencies: 214
-- Data for Name: sale_items; Type: TABLE DATA; Schema: public;
--

COPY public.sale_items (id, book_id, customer_name, item_price, quantity) FROM stdin;
1	1	Jay Arella	$19.99	1
2	1	Jane Doe	$19.99	2
3	2	Mark Roman	$39.99	2
4	2	Ted Daniels	$39.99	5
5	3	Jay Arella	$79.99	1
6	4	John Doe	$19.99	4
7	5	Jackson Galaxy	$39.99	3
8	6	Stephen Fry	$79.99	2
9	7	Bill Valley	$19.99	2
10	8	Shauna Friedman	$75.00	5
11	9	Vana Black	$24.00	2
12	10	Verona Bard	$112.00	3
13	10	Tim Donaldson	$50.00	4
14	11	Dax Shepherd	$1.00	5
15	12	Molly Wein	$9.99	112
\.


--
-- TOC entry 3342 (class 0 OID 0)
-- Dependencies: 209
-- Name: authors_id_seq; Type: SEQUENCE SET; Schema: public;
--

SELECT pg_catalog.setval('public.authors_id_seq', 16, true);


--
-- TOC entry 3343 (class 0 OID 0)
-- Dependencies: 211
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public;
--

SELECT pg_catalog.setval('public.books_id_seq', 12, true);


--
-- TOC entry 3344 (class 0 OID 0)
-- Dependencies: 213
-- Name: sale_items_id_seq; Type: SEQUENCE SET; Schema: public;
--

SELECT pg_catalog.setval('public.sale_items_id_seq', 15, true);


--
-- TOC entry 3181 (class 2606 OID 16402)
-- Name: authors authors_pkey; Type: CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY public.authors
    ADD CONSTRAINT authors_pkey PRIMARY KEY (id);


--
-- TOC entry 3183 (class 2606 OID 16411)
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- TOC entry 3185 (class 2606 OID 16425)
-- Name: sale_items sale_items_pkey; Type: CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY public.sale_items
    ADD CONSTRAINT sale_items_pkey PRIMARY KEY (id);


--
-- TOC entry 3186 (class 2606 OID 16412)
-- Name: books books_author_id_fkey; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.authors(id);


--
-- TOC entry 3187 (class 2606 OID 16426)
-- Name: sale_items sale_items_book_id_fkey; Type: FK CONSTRAINT; Schema: public;
--

ALTER TABLE ONLY public.sale_items
    ADD CONSTRAINT sale_items_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.books(id);


-- Completed on 2024-04-12 16:42:32 PDT

--
-- PostgreSQL database dump complete
--


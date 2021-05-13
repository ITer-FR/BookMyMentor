<?php

namespace App\Repository;

use App\Entity\Mentor;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Mentor|null find($id, $lockMode = null, $lockVersion = null)
 * @method Mentor|null findOneBy(array $criteria, array $orderBy = null)
 * @method Mentor[]    findAll()
 * @method Mentor[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MentorRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Mentor::class);
    }

    // /**
    //  * @return Mentor[] Returns an array of Mentor objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Mentor
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
